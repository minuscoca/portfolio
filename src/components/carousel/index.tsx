"use client";

import * as React from "react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { wrap } from "popmotion";
import { Button } from "../ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const variants = {
  enter: (direction: number) => {
    return {
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => {
    return {
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    };
  },
};

/**
 * Experimenting with distilling swipe offset and velocity into a single variable, so the
 * less distance a user has swiped, the more velocity they need to register as a swipe.
 * Should accomodate longer swipes and short flicks without having binary checks on
 * just distance thresholds and velocity > 0.
 */
const swipeConfidenceThreshold = 10000;
const swipePower = (offset: number, velocity: number) => {
  return Math.abs(offset) * velocity;
};

export function Carousel({ data }: { data: string[] }) {
  const [[page, direction], setPage] = useState([0, 0]);

  // We only have 3 images, but we paginate them absolutely (ie 1, 2, 3, 4, 5...) and
  // then wrap that within 0-2 to find our image ID in the array below. By passing an
  // absolute page index as the `motion` component's `key` prop, `AnimatePresence` will
  // detect it as an entirely new image. So you can infinitely paginate as few as 1 images.
  const imageIndex = wrap(0, data.length, page);

  const paginate = (newDirection: number) => {
    setPage([page + newDirection, newDirection]);
  };

  return (
    <div className="relative flex h-full w-full items-center justify-center overflow-hidden">
      <Button
        variant="ghost"
        size="icon"
        className="z-50 m-2 sm:m-8"
        onClick={(e) => paginate(-1)}
      >
        <ChevronLeft size={40} />
      </Button>

      <div className="relative flex h-full w-full items-center justify-center p-4 sm:p-8">
        <AnimatePresence initial={false} custom={direction}>
          <motion.img
            key={page}
            src={data[imageIndex]}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            // exit="exit"
            className="max-h-full max-w-full rounded-xl"
            transition={{
              x: { type: "spring", stiffness: 300, damping: 30 },
              opacity: { duration: 0.2 },
            }}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            dragElastic={1}
            onDragEnd={(e, { offset, velocity }) => {
              const swipe = swipePower(offset.x, velocity.x);

              if (swipe < -swipeConfidenceThreshold) {
                paginate(1);
              } else if (swipe > swipeConfidenceThreshold) {
                paginate(-1);
              }
            }}
          />
        </AnimatePresence>
        {
          // load all images at once
          data.map(url => <img key={url} src={url} alt={url} className="hidden" />)
        }
      </div>

      <Button
        variant="ghost"
        size="icon"
        className="z-50 m-2 sm:m-8"
        onClick={(e) => paginate(1)}
      >
        <ChevronRight size={40} />
      </Button>
    </div>
  );
}
