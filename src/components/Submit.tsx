import React from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default function Submit(props: any) {
  // const {  } = props;

  return (
    <section>
      <Form>
        <button>submit</button>
      </Form>
    </section>
  );
}
