import React, {useState, useEffect} from 'react';
import Select from 'react-select';

const DropDown = props => {
    const { className, id, options, ...rest } = props;
    const [stateObj, setStateObj] = useState({ selectedOption: '', selectedList: null });

    const selectStyles = {
        control: (css, state) => ({
          ...css,
          width: '60%',
          '&:hover': {
            borderColor: state.isFocused ? '#1565c0':'#424242'
          },
          borderColor: state.isFocused ? '#1565c0': '#bdbdbd',
          display: 'flex',
          flexDirection: 'row',
        }),
        container: provided => ({
            ...provided,
            display: 'flex',
            'justify-content': 'center'
          
        }),
        input: base => ({
          ...base,
          '& input': {
              font: 'inherit'
          }
        }),
        placeholder: provided => ({
          ...provided,
          fontSize: 10,
          width: '100%',
          float: 'left'
        }),
        singleValue: provided => ({
          ...provided,
          paddingLeft: 8,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          maxWidth: 'calc(100% - 14px)'
        }),
        valueContainer: provided => ({
          ...provided,
          display: 'flex',
          flexWrap: 'wrap',
          flex: 1,
          alignItems: 'center',
          overflow: 'hidden',
          color:'black',
          height: '100%'
        }),
        menu: provided => ({
          ...provided,
          //margin: theme.spacing(0.5, -0.5),
          height: 'auto',
          width: '100%'
        }),
        menuList: provided => ({
          ...provided,
          width: '100%'
        }),
        option: (provided, state) => {
          return {
            ...provided,
            backgroundColor: state.isSelected ? '#2f89d6' : null,
            '&:hover': {
              backgroundColor: state.isSelected ? '#28518f':'#e0e0e0'
            }
          };
        }
    };

    const handleChange = e => {
      let { updateValueObj } = props;
      if(e!=null) {
        setStateObj({ ...stateObj, selectedOption: e.value, selectedList: e });
        (id=="currency_converter_base") && updateValueObj('currency_converter_base',e.value);
        (id=="currency_converter_target") && updateValueObj('currency_converter_target',e.value);
        (id=="historical_rate_base_currency") && updateValueObj('historical_rate_base_currency',e.value);
        (id=="latest_rate_base_currency") && updateValueObj('latest_rate_base_currency',e.value);
        (id=="historical_currency_converter_base") && updateValueObj('historical_currency_converter_base',e.value);
        (id=="historical_currency_converter_target") && updateValueObj('historical_currency_converter_target',e.value);
      } else {
        setStateObj({ ...stateObj, selectedOption: '', selectedList: null });
        (id=="currency_converter_base") && updateValueObj('currency_converter_base',null);
        (id=="currency_converter_target") && updateValueObj('currency_converter_target',null);
        (id=="historical_rate_base_currency") && updateValueObj('historical_rate_base_currency',null);
        (id=="latest_rate_base_currency") && updateValueObj('latest_rate_base_currency',null);
        (id=="historical_currency_converter_base") && updateValueObj('historical_currency_converter_base',null);
        (id=="historical_currency_converter_target") && updateValueObj('historical_currency_converter_target',null);
      } 
       
    }


    return (
      <div className={className} {...rest}>
        <Select 
            id={id}
            options={options}
            value={stateObj.selectedList}
            isSearchable={false}
            isClearable
            placeholder=""
            onChange={handleChange}
            styles={selectStyles}  
            menuPlacement="auto"
            menuPortalTarget={document.querySelector('body')}
        />
      </div>
    );
};

export default DropDown;
