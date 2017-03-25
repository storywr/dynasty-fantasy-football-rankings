class Api::CommentsController < ApplicationController
  def index
    q = params[:q]

    if q.blank?
      render status: 200,
      json: Comment.all
    else
      render(
        status: 200,
        json: Comment.where(["name LIKE ?", "%#{q}%"]).limit(100)
      )
    end
  end

  def create
    @comment = Comment.create(comment_params)
  end

  private

  def comment_params
    params.require(:comment).permit(:summary, :player_id)
  end

end
