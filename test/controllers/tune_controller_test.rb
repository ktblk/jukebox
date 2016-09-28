require 'test_helper'

class TuneControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get tune_index_url
    assert_response :success
  end

  test "should get show" do
    get tune_show_url
    assert_response :success
  end

end
