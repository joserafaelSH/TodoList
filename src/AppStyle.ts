import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const WrapperApp = styled.div`
    text-align: center;
`;

export const WrapperLink = styled(Link)`
    color: #000;
    display: inline-block;
    margin: 0 10px;
    &:hover {
        text-decoration: none;
    }
`;
