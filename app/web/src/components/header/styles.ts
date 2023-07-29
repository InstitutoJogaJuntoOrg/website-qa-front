import { styled } from "styled-components";

export const Cointaner = styled.div`
    padding: 1.5rem 2rem;
    color: ${(props) => props.theme.white};
    font-size: .75rem;
    display: flex;
    background-color: #0C0C0C;
    align-items: center;
    justify-content: space-between;
    h1 {
        font-weight: 200;
    }
    ul {
        list-style: none;
        li {
            font-size: 1rem;
        }
    }
`