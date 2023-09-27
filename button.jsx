import Wrapper from './wrapper'

export default props => {
  const {
    children,
    wrapper = false,
    wrapperClass,
    type = 'submit',
    loadingLabel,
    loading = false,
    ...rest
  } = props
  return (
    <Wrapper wrap={wrapper} className={wrapperClass}>
      <button type={type} {...props}>
        {children}
      </button>
    </Wrapper>
  )
}
