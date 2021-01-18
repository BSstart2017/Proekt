import React from "react";
import profileReducer, {addPost, deletePost} from "./profileReducer";

let state = {
    PostsData: [
        {id: 1, message: 'Че молчим на че не пишем а?', LikesCount: '9'},
        {id: 2, message: 'Привет Мир!', LikesCount: '12'},
        {id: 3, message: 'Ну здарова чувак!', LikesCount: '32'}
    ]
}

test('renders learn react link', () => {
    let action = addPost("New_text_kruto");

    let newState = profileReducer(state, action);
    expect(newState.PostsData.length).toBe(4);
});

test('renders learn react link dcfsdf', () => {
    let action = addPost("New_text_kruto");

    let newState = profileReducer(state, action);

    expect(newState.PostsData[3].message).toBe("New_text_kruto");
});

test('Moi pervi test 1', () => {
    let action = deletePost(1);

    let newState = profileReducer(state, action);

    expect(newState.PostsData.length).toBe(2);
});