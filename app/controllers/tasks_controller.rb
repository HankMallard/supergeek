class TasksController < ApplicationController

	def index
    @tasks = Task.all
  end

  def show
  	@task = Task.find(params[:id])
  end

  def new
    @task = Task.new
  end

  def create
    @task = Task.new(task_params)

    respond_to do |format|
      if @task.save
        format.html { redirect_to tasks_url, notice: 'Task was successfully created.' }
        format.json { render :show, status: :created, location: @task }
      else
        format.html { render :new }
        format.json { render json: @task.errors, status: :unprocessable_entity }
      end
    end
  end

  private

  def task_params
  	params.require(:task).permit(:name, :description, :points)
  end
end
