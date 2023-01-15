import { assign, createMachine } from "xstate";

export const countMachine =
  /** @xstate-layout N4IgpgJg5mDOIC5QAoC2BDAxgCwJYDswBKAOkwHsBXfAFwGIBJAOQGEBtABgF1FQAHcrFw1c5fLxAAPRADYAjCQCscxTIDMHRQHYZWgBwAWeQBoQAT0R6Fijrbl61AJkMcAnI4C+X0-nIQ4EmhYeIREEgJCImIS0ggAtHKmFvGKJK7pGZmZat4gQTgExGRUtOGCwqLiSFKIBlpJiPaOJAaKanJaioqOrjJGel5eQA */
  createMachine<{
    count: number;
  }>(
    {
      predictableActionArguments: true,
      context: {
        count: 0,
      },

      states: {
        count: {
          on: {
            INC: {
              target: "count",
              internal: true,
              actions: "inc",
            },
          },
        },
      },

      initial: "count",
    },
    {
      actions: {
        inc: assign((context, event) => {
          console.log(context, event);
          return {
            count: context.count + 1,
          };
        }),
      },
    }
  );
