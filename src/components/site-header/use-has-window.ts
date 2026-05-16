"use client";

import { useSyncExternalStore } from "react";

function subscribe() {
  return () => {};
}

function getClientSnapshot() {
  return true;
}

function getServerSnapshot() {
  return false;
}

/** True on the client after hydration (`window` is available). */
export function useHasWindow() {
  return useSyncExternalStore(subscribe, getClientSnapshot, getServerSnapshot);
}
