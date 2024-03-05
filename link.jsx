import Wrapper from './wrapper'

export default props => {
  const {children, wrapperChildren, wrapper = false, wrapperClass, ...remainingProps} = props
  return (
    <Wrapper wrap={wrapper} className={wrapperClass}>
      {!Object.prototype.hasOwnProperty.call(remainingProps, 'href') ? (
        <div {...remainingProps}>{children}</div>
      ) : undefined}
      {Object.prototype.hasOwnProperty.call(remainingProps, 'href') ? (
        <a {...remainingProps}>{children}</a>
      ) : undefined}
      {wrapperChildren}
    </Wrapper>
  )
}
