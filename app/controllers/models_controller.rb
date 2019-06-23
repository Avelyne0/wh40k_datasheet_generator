class ModelController < ApplicationController
  before_action :find_model, only: %i[show edit update destroy]

  def index
    @models = Model.all
  end

  def show; end

  def new
    @model = Model.new
  end

  def edit; end

  def create
    model = Model.create model_params
    redirect_to model
  end

  def update
    @model.update model_params
    redirect_to model_path(@model)
  end

  def destroy
    @model.destroy
    redirect_to models_path
  end

  private

  def find_model
    @model = Model.find(params[:id])
  end

  def model_params
    params.require(:model).permit(:name, :movement, :weapon_skill, :ballistic_skill, :strength, :toughness, :wounds, :attacks, :leadership, :save, :ability_id, :keyword_id, :wargear_option_id, :weapon_id, :unit_id)
  end
end
