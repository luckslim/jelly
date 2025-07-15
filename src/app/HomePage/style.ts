import styled from "styled-components";
export const ContainerProvider = styled.div`
    display: flex;
    align-items: start;
    justify-content: space-around;
    margin-top: 2rem;
    padding: 1rem;
`;
export const ContainerFeed = styled.div`
    width: 40%;
    display: grid;
    justify-content: center;
    align-items: center;
`;
export const ContainerSideBar = styled.div`
 position: sticky;
  top: 2rem; /* distância do topo */
  align-self: flex-start;
  height: fit-content;
    display: grid;
    grid: 1;
    gap: 1rem;
    padding: 1rem;
`;
export const ContainerExplorer = styled.div`
 position: sticky;
  top: 2rem; /* distância do topo */
  align-self: flex-start;
  height: fit-content;
    display: grid;
    grid: 1;
    gap: 1rem;
    justify-content: center;
`;
