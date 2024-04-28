import { fireEvent, render, screen } from '@testing-library/react';
import PostComment from '.';
import PostComments from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    test("Deve adicionar dois comentários corretamente", () => {
        render(<PostComments />);
    
        // Encontro o textarea para comentários
        const commentTextarea = screen.getByRole("textbox");
    
        // Digitando o primeiro comentário
        fireEvent.change(commentTextarea, {
          target: { value: "Primeiro comentário" },
        });
    
        // Verifica se o texto foi digitado corretamente
        expect(commentTextarea).toHaveValue("Primeiro comentário");
    
        // Encontra o botão de enviar comentário
        const submitButton = screen.getByRole("button", { name: /comentar/i });
    
        // Clica no botão de enviar comentário
        fireEvent.click(submitButton);
    
        // Verifica se o comentário foi adicionado à lista
        expect(screen.getByText("Primeiro comentário")).toBeInTheDocument();
    
        // Digita agora o segundo comentário
        fireEvent.change(commentTextarea, {
          target: { value: "Segundo comentário" },
        });
    
        // Verifica se o texto foi digitado corretamente
        expect(commentTextarea).toHaveValue("Segundo comentário");
    
        // Clica novamente no botão de enviar comentário
        fireEvent.click(submitButton);
    
        // Verifica se o segundo comentário foi adicionado à lista
        expect(screen.getByText("Segundo comentário")).toBeInTheDocument();
    
        // Verifica se ambos os comentários estão presentes
        expect(screen.getAllByTestId("post-comment")).toHaveLength(2);
      });
});