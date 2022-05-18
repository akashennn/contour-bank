import styled from "styled-components";
import ErrorImage from "../assets/404.svg";

const ErrorPage = (): JSX.Element => {
  return (
    <Container>
      <img src={ErrorImage} className="error-image" alt="404" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  .error-image {
    @media only screen and (min-width: 768px) {
      /* tablets and desktop */
      width: 500px;
      height: 500px;
    }

    @media only screen and (max-width: 767px) {
      /* phones */
      width: 300px;
      height: 300px;
    }
  }
`;

export default ErrorPage;
