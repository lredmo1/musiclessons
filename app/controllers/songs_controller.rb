class SongsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        songs = Song.all
        render json: songs, status: :ok
    end

    def create
        song = Song.create!(song_params)
        render json: song, status: :created
    end

    private

    def song_params
      params.permit(:name, :data, :user_id)
    end
end
