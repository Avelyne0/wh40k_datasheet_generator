
class UnitsController < ApplicationController
  before_action :find_unit, only: %i[show edit update destroy]

  def index
    @units = Unit.all
  end

  def show; end

  def new
    @unit = Unit.new
  end

  def edit; end

  def create
    unit = Unit.create unit_params
    redirect_to unit
  end

  def update
    @unit.update unit_params
    redirect_to unit_path(@unit)
  end

  def destroy
    @unit.destroy
    redirect_to units_path
  end

  private

  def find_unit
    @unit = Unit.find(params[:id])
  end

  def unit_params
    params.require(:unit).permit(:composition, :model_id, :faction_keyword_id, :wargear_option_id)
  end
end
