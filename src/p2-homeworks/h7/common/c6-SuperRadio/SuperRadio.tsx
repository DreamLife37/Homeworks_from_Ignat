import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperRadio.module.css'

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: any) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        if (onChangeOption) {
            onChangeOption(e.currentTarget.value)
        }
    }

    const mappedOptions: any[] = options ? options.map((o, i) => ( // map options with key
        <div className={s.checkboxWrapper}>
            <label key={name + '-' + i}>
                <input
                    type={'radio'}
                    name={name}
                    value={o}
                    checked={o === value}
                    onChange={onChangeCallback}
                    // name, checked, value, onChange
                />
                {o} <span></span>
            </label>
        </div>
    )) : []

    return (
        <>
            {mappedOptions}
        </>
    )
}

export default SuperRadio
