import styled from "styled-components";

const Wrapper=styled.main`
nav{
   width:var(--fluid-width);
   max-width:var(--max-width);
   margin:0 auto;
   height:var(--nav-height);
   display:flex;
   align-items:center; 
}
.page{
    min-height: calc(100vh - var(--nav-height));
    display: grid;
    align-items:center;
    margin-top:-3rem;
}
`

export default Wrapper;