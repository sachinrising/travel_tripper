class ScreenSettingsController < ApplicationController

  # GET /screen_settings
  # GET /screen_settings.json
  def index
    @screen_settings = ScreenSetting.where(:screen_name=>"Home")
    render json: @screen_settings.first
  end

  # GET /screen_settings/1
  # GET /screen_settings/1.json
  def show
    @screen_setting = ScreenSetting.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @screen_setting }
    end
  end

  # GET /screen_settings/new
  # GET /screen_settings/new.json
  def new
    @screen_setting = ScreenSetting.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @screen_setting }
    end
  end

  # GET /screen_settings/1/edit
  def edit
    @screen_setting = ScreenSetting.find(params[:id])
  end

  # POST /screen_settings
  # POST /screen_settings.json
  def create
    @screen_setting = ScreenSetting.new(params[:screen_setting])

    respond_to do |format|
      if @screen_setting.save
        format.html { redirect_to @screen_setting, notice: 'Screen setting was successfully created.' }
        format.json { render json: @screen_setting, status: :created, location: @screen_setting }
      else
        format.html { render action: "new" }
        format.json { render json: @screen_setting.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /screen_settings/1
  # PUT /screen_settings/1.json
  def update
    @screen_setting = ScreenSetting.find(params[:id])

    respond_to do |format|
      if @screen_setting.update_attributes(params[:screen_setting])
        format.json { render json: @screen_setting, status: :ok }
      else
        format.json { render json: @screen_setting.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /screen_settings/1
  # DELETE /screen_settings/1.json
  def destroy
    @screen_setting = ScreenSetting.find(params[:id])
    @screen_setting.destroy

    respond_to do |format|
      format.html { redirect_to screen_settings_url }
      format.json { head :no_content }
    end
  end

end
