export default ({children, className, wrap = false}) => {
  if (!wrap) {
    return children
  }
  return <div className={className}>{children}</div>
}
