import Wrapper from './wrapper'

export default ({
  viewBox = '0 0 50 50',
  focusable = false,
  children,
  wrapper = false,
  wrapperClass,
  fill = 'currentColor',
  xmlns = 'http://www.w3.org/2000/svg',
  ...remainingProps
}) => (
  <Wrapper wrap={wrapper} className={wrapperClass}>
    <svg xmlns={xmlns} focusable={focusable} fill={fill} viewBox={viewBox} {...remainingProps}>
      {children}
    </svg>
  </Wrapper>
)
