let shouldResetNextRoute = false;

export function requestLenisRouteReset() {
  shouldResetNextRoute = true;
}

export function consumeLenisRouteReset() {
  const shouldReset = shouldResetNextRoute;
  shouldResetNextRoute = false;
  return shouldReset;
}
