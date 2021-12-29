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
`;

export const Wrapper = styled.div`
   border: 2px solid white;
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;
`;
export const Img = styled.div`
  flex:1;
  width: 200px;
  margin-top: 20px;
  text-align: center;

  img{
      width:400px;
      height:500px;
    }

    .hero-name{
      font-size: 30px;
      margin: 20px 0;
    }
`;

export const Info = styled.div`
   flex:2;
   display: grid;
   gap: 20px;
   padding: 20px;
   grid-template-columns: repeat(3,auto);

   .infoContainer{
    text-align: center;
    padding: 10px;
    margin: 0 auto;

    img{
      width:50px;
      height:60px;
    }

    .title{
      font-size:20px;
      padding: 10px 0;
      color: var(--third-color);
    }
   }
`;

