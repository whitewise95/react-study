import React from "react";
import { useDispatch, useSelector } from "react-redux";
import HeightBox from "../common/HeightBox";
import { removeTodo, switchTodo } from "../../modules/todos";
import { useNavigate } from "react-router-dom";
import {
  StyledDiv,
  StyledTitle,
  StyledContents,
  TodoButton,
  FlexButtonBox,
  LinkedP,
  FlexTitleBox,
} from "./styles";
import { useMutation, useQueryClient } from "react-query";
import { deleteTodo, doneTodo } from "../../../api/todo";

function Todo({ todo, isActive }) {

  const queryClient = useQueryClient();
  const isDoneMutation = useMutation(doneTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    }
  })

  const deleteMutation = useMutation(deleteTodo, {
    onSuccess: () => {
      queryClient.invalidateQueries("todos");
    }
  })
  
  const navigate = useNavigate();

  const CONFIRM_MESSAGE = `[삭제 확인]\n\n"${todo.title}" 항목을 정말로 삭제하시겠습니까?\n삭제를 원치 않으시면 [취소] 버튼을 눌러주세요.`;

  const handleSwitchButton = (id, isDone) => {
    isDoneMutation.mutate({id, isDone});
  };

  const handleRemoveButton = (id) => {
    if (window.confirm(CONFIRM_MESSAGE)) deleteMutation.mutate(id);
  };

  const handleDetailPageLinkClick = () => {
    navigate(`/${todo.id}`);
  };

  return (
    <StyledDiv>
      <FlexTitleBox>
        <StyledTitle>{todo.title}</StyledTitle>
        <LinkedP onClick={handleDetailPageLinkClick}>[상세보기]</LinkedP>
      </FlexTitleBox>
      <HeightBox height={10} />
      <StyledContents>{todo.contents}</StyledContents>
      <HeightBox height={20} />
      <FlexButtonBox>
        <TodoButton onClick={() => handleSwitchButton(todo.id, todo.isDone)}>
          {isActive ? "완료" : "취소"}
        </TodoButton>
        <TodoButton onClick={() => handleRemoveButton(todo.id) }>삭제</TodoButton>
      </FlexButtonBox>
    </StyledDiv>
  );
}

export default Todo;