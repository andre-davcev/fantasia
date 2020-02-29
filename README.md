# Fantasia

This is my personal sandbox project which you can find at [andredavcev.com](https://andredavcev.com/). Fantasia comes from one of my favorite movies as a kid [The Neverending Story](<https://en.wikipedia.org/wiki/The_NeverEnding_Story_(film)>). Right now the site is a skeleton for all of my interests. Over the years this project should evolve and become my creative outlet. Since my life is pretty busy, don't expect regular updates.

## Technology Stack

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) using [Nrwl Nx](https://nrwl.io/nx). It also utilizes various [Firebase](https://firebase.google.com/) technologies such as [Cloud Firestore](https://firebase.google.com/docs/firestore/) and [Cloud Functions](https://firebase.google.com/docs/functions/). Every push to the master branch triggers continuous integration using [Circle CI](https://circleci.com/). This Angular application is currently on version 9+ and utilizes various TypeScript libraries. [RxJS](https://rxjs-dev.firebaseapp.com/) is used extensively throughout the code and am using [NGXS](https://ngxs.gitbook.io/ngxs) for state management.

## Quick Start & Documentation

Although this is a personal project, you should be able to replicate my environment quite easily. Simply clone my repository `git clone https://github.com/andre-davcev/fantasia.git` and then run `npm i` inside the repository folder (assuming you have npm installed globally). Although I doubt many people will do this, additionally you'd have to create a free Firebase account and create an environment.ts & environment.prod.ts file in the apps/fantasia/src/environments folder. Both should be standard angular environment files but include your Firestore credentials under the `firestore` property.

## Running Fantasia locally

Run `npm run fan-serve`. Then navigate to (localhost:4201)[http://localhost:4201/]. Enjoy!

## Thanks for checking out my code!
