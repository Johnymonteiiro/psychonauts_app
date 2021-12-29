import styled from "styled-components";

export const Container = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 10px;

  .principal-title{
    text-align: center;
    margin: 60px 0 20px 0;
    font-size: 35px;
    color: #ffff;
  }

  .warning{
    text-align: center;
    font-size: 20px;
    position: relative;
    bottom:-300px;
  }
`;

export const Wrapper = styled.div`
  display: grid;
  margin: 80px 0;
  grid-template-columns: repeat(4,auto);
  gap: 30px;
`;

export const CardContent = styled.div`
  width:300px;
  height:500px;
  border-radius: 8px;
  background-color: #3B3B3B;
  transition: all .4s ease-in-out;

  &:hover{
    transform:translateY(-5px);
  }

  img {
    width: 100%;
    height:350px;
    border-radius: 8px 8px 0 0;
  }

  .info{
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .title{
      font-size: 22px;
      font-weight:600;
      color: var(--third-color);
    }

    .addbtn{
      border: none;
      background: transparent;
    }

    .addIcons {
       color: white;
    }

  }

  .btn-link{
    display: flex;
    font-size: 16px;
    padding: 8px 20px;
    border: none;
    border-radius: 8px;
    margin: 15px auto;
  }

`;