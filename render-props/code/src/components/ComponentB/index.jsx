function ComponentA({ x, y }) {
  return (
    <div
      style={{
        background: 'red',
        width: 20,
        height: 20,
        borderRadius: '100%',
        position: 'absolute',
        bottom: -x,
        right: -y,
      }}
    />
  )
}

export default ComponentA;
