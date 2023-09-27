import Wrapper from './wrapper'

export default props => {
  const {
    wrapper = false,
    wrapperClass,
    value = '',
    type = 'text',
    required = false,
    ...propsRemaining
  } = props
  return (
    <Wrapper wrap={wrapper} className={wrapperClass}>
      <input
        type={type}
        value={value}
        {...(required === true ? {required: 'required'} : {})}
        {...propsRemaining}
      />
    </Wrapper>
  )
}
