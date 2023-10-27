import React, { ChangeEvent, useState } from 'react';
import {
  PostContainer,
  PostHeader,
  PostInput,
  PostTextArea,
  ImageUploadWrapper,
  ImagePreview,
  FileInput,
  UploadLabel,
  IconButton,
} from './style';

export const CreatePostView: React.FC = () => {
  const [state, setState] = useState({
    title: '',
    body: '',
    attachments: '',
  });

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setState({ ...state, attachments: reader.result as string });
      };
      reader.readAsDataURL(file);
    }
  };

  const selectClear = () => {
    setState({ ...state, attachments: '' });
  };

  const handleStateChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  return (
    <PostContainer>
      <PostHeader>
        <ImageUploadWrapper>
          {state.attachments && (
            <ImagePreview
              src={state.attachments}
              alt="Preview"
              onClick={selectClear}
            />
          )}
          <UploadLabel htmlFor="image-upload">+</UploadLabel>
          <FileInput
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
          />
        </ImageUploadWrapper>
        <PostInput
          name="title"
          placeholder="Title"
          onChange={handleStateChange}
        />
        <IconButton>+ Create Post</IconButton>
      </PostHeader>
      <PostTextArea
        name="body"
        placeholder="Enter the content..."
        onChange={handleStateChange}
      />
    </PostContainer>
  );
};
