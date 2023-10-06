import Wrapper from './wrapper'

export default props => {
  const {children, wrapper = false, wrapperClass, type = 'submit', ...remainingProps} = props
  return (
    <Wrapper wrap={wrapper} className={wrapperClass}>
      <button type={type} {...remainingProps}>
        {children}
      </button>
    </Wrapper>
  )
}
