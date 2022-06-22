import React, { useState } from 'react';
import styled from 'styled-components';
import TextInput from 'components/inputs/TextInput';
import TextArea from 'components/inputs/TextArea';
import Button from 'components/Button';
import * as Typography from 'typography';
import { Spacing3, Spacing5, Spacing6 } from 'tokens';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 800px;
  margin-left: auto;
  margin-right: auto;
  padding: ${Spacing6};
`;

const Label = styled(Typography.Label)`
  display: flex;
  flex-direction: column;
  margin-bottom: ${Spacing5};

  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

const Text = styled.div`
  flex: 1;
  margin: 0 0 8px;

  @media (min-width: 960px) {
    text-align: right;
    margin: ${Spacing5} ${Spacing3} 0 0;
  }
`;

const InputContainer = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
`;

const ButtonContainer = styled.div`
  display: flex;
`;

const Spacer = styled.div`
  @media (min-width: 960px) {
    flex: 1;
    margin-right: ${Spacing3};
  }
`;

const SubmitButton = styled(Button)`
  flex: 3;
  width: 100%;
`;

export default function Submit() {
  const [name, setName] = useState<string>();
  const [tagline, setTagline] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [tips, setTips] = useState<string>();

  return (
    <section>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          console.log({ name, tagline, description, tips });
        }}
      >
        <Label>
          <Text>Name (Required)</Text>
          <InputContainer>
            <TextInput
              placeholder={'Write a beer name'}
              onChange={({ currentTarget: { value } }) => setName(value)}
              required
            />
          </InputContainer>
        </Label>
        <Label>
          <Text>Tagline</Text>
          <InputContainer>
            <TextInput
              placeholder={'Add a short optional tagline'}
              onChange={({ currentTarget: { value } }) => setTagline(value)}
            />
          </InputContainer>
        </Label>
        <Label>
          <Text>Description (Required)</Text>
          <InputContainer>
            <TextArea
              placeholder={'Write a description'}
              rows={5}
              cols={30}
              onChange={({ currentTarget: { value } }) => setDescription(value)}
              required
            />
          </InputContainer>
        </Label>
        <Label>
          <Text>Brewers tips</Text>
          <InputContainer>
            <TextArea
              placeholder={'Add an optional quote'}
              rows={5}
              cols={30}
              onChange={({ currentTarget: { value } }) => setTips(value)}
            />
          </InputContainer>
        </Label>
        <ButtonContainer>
          <Spacer />
          <SubmitButton disabled={!name || !description}>Submit</SubmitButton>
        </ButtonContainer>
      </Form>
      <pre>{JSON.stringify({ name, tagline, description, tips }, null, 4)}</pre>
    </section>
  );
}
