# Conway Game of Life Simulator

I created this simulator using [Next.js](https://nextjs.org/) bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## What is the Game of Life?
Existential answers aside, Conway's Game of Life is a model starting from an initial state on a two-dimensional grid, and then proceeds over an infinite number of "steps". Cells on the grid have two possible states: live or dead. 

With each step in the model, cells interact with their adjacent eight cells (horizontal, vertical and diagonal). There are three conditions under which a cells state will change:

1. A live cell with fewer than two adjacent live cells dies;
2. A live cell with more than three adjacent live cells dies;
3. A dead cell with exactly three adjacent lives cells becomes live;

Note that any dead cells to which condition 3 does not apply, and any live cells with two or three live neighbours, do not change.

It should also be noted the simulator I've created is not yet perfect - at present, any cells at the edge of the finite grid displayed are assumed to have fewer than eight adjacent cells. The long-term plan is to change this to be more accurate, but for the moment stable configurations, oscillators and spaceships should work as expected (see below for more details on these).


## Getting Started

First, run the development server:

```bash
npm run dev
```

Then open [http://localhost:3000](http://localhost:3000) to view the simulator.

## How to play

1. Create your initial configuration by clicking cells to become live (shown in blue).
2. Press play.
3. Observe.

That's it! 

Of course, the Game of Life is mathematically interesting because some configurations are stable, or have a repeating behaviour.

There are three main patterns that arise:

- Still lifes - these are the stable states, which are either initially configured or are evolved into.
- Oscillators - a pattern of re-ocurring states over finite periods of time.
- Spaceships - these are patterns that translate themselves, or "fly" across the grid.

There are also configurations that can generate spaceships.

After trying a few known combinations of live cells, put in your own initial states and watch what happens - sometimes the configuration forms into still lifes or oscialltors, and sometimes chaos unfolds!

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!