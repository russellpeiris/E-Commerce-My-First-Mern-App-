import { Add, Remove } from "@mui/icons-material"
import styled from "styled-components"
import { Announcements } from "../components/Announcements"
import Footer from "../components/Footer"
import Navbar from "../components/Navbar"
import Newsletter from "../components/Newsletter"
import {mobile} from "../responsive"
const Container = styled.div`

`
const Wrapper = styled.div`
    padding: 50px;
    display: flex;
    ${mobile({flexDirection: "column"})}
`
const ImgContainer = styled.div`
    flex: 1;
`
const Image = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
    ${mobile({height: "40vh"})}
`
const InfoContainer = styled.div`
    flex: 1;
    padding: 0 50px;
    ${mobile({padding: "10px"})}
`
const Title = styled.h1`
    font-weight: 300;
`
const Desc = styled.div`
    margin: 20px 0;
`
const Price = styled.span`
    font-weight: 100;
    font-size: 32px;
`
const FilterContainer = styled.div`
    width: 50%;
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const Filter = styled.div`
    display: flex;
    align-items: center;

`
const FilterTitle = styled.span`
    font-size: 18px;
    font-weight: 200;
`
const FilterColor = styled.div`
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: ${props => props.color};
    margin:0 5px ;
    cursor: pointer;
`
const FilterSize = styled.select`
    font-size: 16px;
    margin-left: 10px;
    padding: 5px;
    outline: none;
`
const FilterSizeOption = styled.option`

`

const AddContainer = styled.div`
    display: flex;
    align-items: center;
    width: 50%;
    justify-content: space-between;
    ${mobile({width: "100%"})}
`
const AmountContainer = styled.div`
    display: flex;
    align-items: center;
    font-weight: 500;
    
`
const Amount = styled.span`
    width: 30px;
    height: 30px;
    border-radius: 10px;
    border: 1px solid  #6ECCAF;
    display: flex;
    align-items: center;
    justify-content: center;
`
const Button = styled.button`
    padding: 15px;
    border: 2px solid #6ECCAF;
    background-color: #fff;
    cursor: pointer;
    transition: all 0.5s ease;

    &:hover{
        background-color: #6ECCAF;
    }
`

const Product = () => {
  return (
    <Container>
        <Navbar/>
        <Announcements/>
        <Wrapper>
            <ImgContainer>
                <Image src="https://i.ibb.co/S6qMxwr/jean.jpg"/>
            </ImgContainer>
            <InfoContainer>
                <Title>Denim Jumpsuit</Title>
                <Desc>Lorem ipsum dolor sit amet consectetur adipisicing elit. A magni quibusdam officiis, veritatis illum iure repellat modi cupiditate reiciendis molestiae molestias vel laborum cumque quidem quia saepe. Magnam, accusamus odio!</Desc>
                <Price>LKR 3500</Price>
                <FilterContainer>
                    <Filter>
                        <FilterTitle>Color :</FilterTitle>
                        <FilterColor color="black"/>
                        <FilterColor color="darkblue"/>
                        <FilterColor color="gray"/>
                    </Filter>
                    <Filter>
                        <FilterTitle>Size :</FilterTitle>
                        <FilterSize>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                        </FilterSize>
                    </Filter>
                </FilterContainer>
                <AddContainer>
                    <AmountContainer>
                        <Remove/>
                            <Amount>1</Amount>
                        <Add/>
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                </AddContainer>
            </InfoContainer>
        </Wrapper>
        <Newsletter/>
        <Footer/>
    </Container>
  )
}

export default Product