import { playlistImg } from "../../components/arrows";
import { useParams } from "react-router-dom";

import styled from "styled-components";
const StyledCategoriesPage = styled.div`
  color: red;
  background-color: black;
  height: 400px;
`;
export default function CategoriesPage() {
    const params = useParams()
    const category = playlistImg.find((category) => category.id === Number(params.id))
  return (
    <>
      <StyledCategoriesPage>Category: {category.id}</StyledCategoriesPage>
    </>
  );
}
