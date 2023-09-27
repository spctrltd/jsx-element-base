import Wrapper from './wrapper'
import Input from './input'
import {isEmpty} from './helper'

const Options = ({options = [], isDatalist = false}) =>
  options.map(({value, label, selected}) => (
    <option value={value} {...(selected === true ? {selected: 'selected'} : {})}>
      {(!isDatalist && label) || ''}
    </option>
  ))

export default props => {
  const {
    options = [],
    optgroup,
    isDatalist = false,
    name,
    id,
    wrapper = false,
    wrapperClass,
    required = false,
    ...remainingProps
  } = props
  const isOptgroup = !isEmpty(optgroup)
  const ifDatalist = !isOptgroup && isDatalist === true
  const Tag = ifDatalist && id !== undefined ? 'datalist' : 'select'
  if (ifDatalist && id === undefined) {
    console.warning('<datalist> requires "id" attribute')
  }
  const requiredValue = required === true ? {required: 'required'} : {}
  const commonProps = {name, ...remainingProps}
  const inputProps = {wrapper, wrapperClass, list: id, required, ...commonProps}
  const selectProps = ifDatalist ? {id} : {id, ...commonProps, ...requiredValue}
  return (
    <Wrapper>
      {(ifDatalist && <Input {...inputProps} />) || ''}
      <Wrapper wrap={!ifDatalist && wrapper} className={wrapperClass}>
        <Tag {...selectProps}>
          {(isOptgroup &&
            Object.keys(optgroup).map(key => (
              <optgroup label={key}>
                <Options options={optgroup[key]} />
              </optgroup>
            ))) ||
            ''}
          {(!isOptgroup && <Options options={options} isDatalist={ifDatalist} />) || ''}
        </Tag>
      </Wrapper>
    </Wrapper>
  )
}
