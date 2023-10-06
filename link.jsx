import Wrapper from './wrapper'

export default props => {
  const {children, wrapper = false, wrapperClass, ...remainingProps} = props
  return (
    <Wrapper wrap={wrapper} className={wrapperClass}>
      <a {...remainingProps}>{children}</a>
    </Wrapper>
  )
}
