export default function debounce(callback,wait) {
  let id = window.setTimeout(function() {}, 0);

  while (id--) {
      window.clearTimeout(id); // will do nothing if no timeout with id is present
  }

  let timeout = null
  return (...args) => {
    const next = () => callback(...args)
    clearTimeout(timeout)
    timeout = setTimeout(next, wait)
  }
}