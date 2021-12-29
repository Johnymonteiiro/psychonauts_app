import  styled  from 'styled-components';



export const Wrapper = styled.div`
  width: 100%;
  height: 80px;
  padding: 10px 0;
  background-color: var(--second-color);
`;

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;

  .logo-title{
    cursor: pointer;
    color: white;
    transition: all .4s ease-in-out;

    &:hover{
      color: var(--third-color);
    }

  }

  .link{
    display: flex;
    color: #ffff;
    transition: all .4s ease-in-out;

    &:hover{
      color: var(--third-color);
    }

    .favorite-link{
    font-size: 24px;
    margin-left:10px;
  }

  }

  
`;
