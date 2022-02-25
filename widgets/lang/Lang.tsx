import React, { useCallback, useEffect, useState } from 'react'
import Link from 'next/link'
import HipchatChevronDownIcon from '@atlaskit/icon/glyph/hipchat/chevron-down'

import * as Styled from './Lang.styled'

const Lang: React.FunctionComponent = () => {
  const [isActive, setIsActive] = useState<boolean>(false)
  const [lang, setLang] = useState<string>('EN')

  useEffect(() => {
    if (localStorage.getItem('lang')) {
      if (localStorage.getItem('lang') === 'TR') {
        setLang('TR')
      } else {
        setLang('EN')
      }
    } else {
      localStorage.setItem('lang', 'TR')
    }
  }, [])

  const selectLang = useCallback(() => {
    if (localStorage.getItem('lang') === 'TR') {
      setLang('TR')
      localStorage.setItem('lang', 'EN')
    } else {
      setLang('EN')
      localStorage.setItem('lang', 'TR')
    }
  }, [lang])

  return (
    <Styled.Lang>
      <Styled.Detail>
        <Link href="/home">Menü</Link>
        <Styled.Langs onClick={() => setIsActive(!isActive)}>
          <p>{lang}</p>
          <Styled.Arrow isActive={isActive}>
            <HipchatChevronDownIcon label="chevron-down" primaryColor="#2f5143" size="medium" />
          </Styled.Arrow>
          {isActive && (
            <Styled.Dropdown>
              <Styled.LangButton onClick={selectLang}>
                {lang === 'TR' ? 'EN' : 'TR'}
              </Styled.LangButton>
            </Styled.Dropdown>
          )}
        </Styled.Langs>
      </Styled.Detail>
    </Styled.Lang>
  )
}

export default Lang