import React from 'react';
import styled from 'styled-components';

const Header = () => {
    const HeaderStyle = styled.div`
        height: 50px;
    `;
    const NavStyle = styled.div`
        display: grid;
        justify-content: center;
        padding: 20px;
    `;

    const MenuStyle = styled.ul`
        display: grid;
        grid-template-columns: auto auto;
        grid-gap: 30px;
        list-style-type: none;
        font-weight: 800;
    `;

    return (
        <HeaderStyle>
            <NavStyle>
                <MenuStyle>
                    <li>영화목록</li>
                    <li>영화등록</li>
                </MenuStyle>
            </NavStyle>
        </HeaderStyle>
    );
};

export default Header;
