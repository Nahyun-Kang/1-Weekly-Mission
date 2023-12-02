import { useRef } from "react";
import styled from "styled-components";
import { BlueWrapper } from "./Wrapper";
import StyledButton from "./Button";
import {ReactComponent as linkIcon } from "../../Assets/link.svg";

interface WrapperItem {
  $view: boolean;
  $viewFooter: boolean;
}

function LinkBar({ onChange, onShow, $view, $viewFooter }: any) {
  const inputRef = useRef<any>();

  const handleChange = (e: any) => {
    const nextValue = e.target.value;
    onChange(nextValue);
  };

  const handleButtonClick = (e: any) => {
    e.preventDefault();
    onChange(inputRef?.current?.value);
    onShow(true, "addLink");
  };

  return (
    <Wrapper $view={$view} $viewFooter={$viewFooter}>
      <Form>
        <Icon src={linkIcon} alt={linkIcon} />
        <LinkAddInput
          placeholder="링크를 추가해 보세요"
          onChange={handleChange}
          ref={inputRef}
        />
        <StyledButton onClick={handleButtonClick}> 추가하기</StyledButton>
      </Form>
    </Wrapper>
  );
}

export default LinkBar;

const Wrapper = styled(BlueWrapper)<WrapperItem>`
  padding:60px 0 90px;
  z-index: 3;

  @media (max-width: 767px) {
    padding: 24px 0 40px;
  }
`;

const Form = styled.form`
  width: 800px;
  margin: 0 auto;
  display: flex;
  flex-grow: 1;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  border-radius: 15px;
  border: 1px solid #6d6afe;
  background-color: #fff;

  @media (max-width: 1199px) and (min-width: 768px) {
    width: 704px;
  }

  @media (max-width: 767px) {
    width: 325px;
    padding: 8px 10px;
  }
`;

const LinkAddInput = styled.input`
  font-size: 1.6rem;
  border: none;
  overflow: hidden;
  flex-grow: 1;

  &::placeholder {
    color: #9fa6b2;
  }

  &:focus {
    outline: none;
  }
`;

const Icon = styled(linkIcon)`
  width: 20px;
  height: 20px;
  margin-right: 8px;

`;