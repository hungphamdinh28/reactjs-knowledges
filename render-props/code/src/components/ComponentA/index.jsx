function ComponentB({ x, y }) {
  return (
    <div
      style={{
        background: 'blue',
        width: 20,
        height: 20,
        borderRadius: '100%',
        position: 'absolute',
        top: x,
        right: y,
      }}
    />
  )
}

export default ComponentB;
