import { render, screen } from '@testing-library/react';

import Post from '.';

describe('Test <Post />', () => {
    it('Deve renderizar corretamente', () => {
        render(
            <Post imageUrl="https://via.placeholder.com/200x200">
                Teste
            </Post>
        );
        expect(screen.getByText('Teste')).toBeInTheDocument();
    });
})