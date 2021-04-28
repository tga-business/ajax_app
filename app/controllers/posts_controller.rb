class PostsController < ApplicationController

  def index
    @posts = Post.order(id: "DESC")
  end
#DESCでidの降順に並び替え
  #def new
  #end

  def create
    Post.create(content: params[:content])
    render json:{ post: post}
  end
#レスポンスで返却されるデータフォーマットをjsonに設定
end
