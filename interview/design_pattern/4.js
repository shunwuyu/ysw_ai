const Singleton = (() => {
  let instance;
  return () => instance || (instance = {
    name: 'MySingleton',
    timestamp: new Date(),
  })
})() 