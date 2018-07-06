class CommentsController < ApplicationController
    before_action :find_comment, only: [:destroy]

    def create
      @post = Post.find(params[:post_id])
      @comment = Comment.new(comment_params)
      @comment.post = @post

      if @comment.save
        redirect_to @post
      else
        @comments = @post.comments.order(created_at: :desc)
        render 'posts/show'
      end
    end
    
    def destroy
      @comment = Comment.find(params[:id])
      @comment.destroy
      redirect_to post_path(@comment.post)
    end

    private

    def comment_params
        params.require(:comment).permit(:body)
    end
  
    def find_comment
      @comment = Comment.find(params[:id])
    end
  
end
