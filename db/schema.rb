# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20170309044656) do

  create_table "folders", force: :cascade do |t|
    t.string   "name"
    t.integer  "permission"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.integer  "fork_from"
    t.index ["user_id"], name: "index_folders_on_user_id"
  end

  create_table "matches", force: :cascade do |t|
    t.integer  "user_id"
    t.integer  "subject_id"
    t.integer  "score"
    t.boolean  "is_success"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["subject_id"], name: "index_matches_on_subject_id"
    t.index ["user_id"], name: "index_matches_on_user_id"
  end

  create_table "relationships", force: :cascade do |t|
    t.integer  "follower_id"
    t.integer  "followed_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["followed_id"], name: "index_relationships_on_followed_id"
    t.index ["follower_id", "followed_id"], name: "index_relationships_on_follower_id_and_followed_id", unique: true
    t.index ["follower_id"], name: "index_relationships_on_follower_id"
  end

  create_table "shares", force: :cascade do |t|
    t.integer  "type"
    t.integer  "user_id"
    t.integer  "folder_id"
    t.integer  "subject_id"
    t.string   "token"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["folder_id"], name: "index_shares_on_folder_id"
    t.index ["subject_id"], name: "index_shares_on_subject_id"
    t.index ["user_id"], name: "index_shares_on_user_id"
  end

  create_table "subjects", force: :cascade do |t|
    t.string   "name"
    t.integer  "permission"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer  "user_id"
    t.integer  "folder_id"
    t.integer  "fork_from"
    t.index ["folder_id"], name: "index_subjects_on_folder_id"
    t.index ["user_id"], name: "index_subjects_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string   "name"
    t.string   "email"
    t.string   "remember_token"
    t.string   "avatar"
    t.date     "date_of_birth"
    t.boolean  "admin"
    t.integer  "account"
    t.datetime "created_at",     null: false
    t.datetime "updated_at",     null: false
  end

  create_table "words", force: :cascade do |t|
    t.string   "word_content"
    t.string   "word_image"
    t.string   "definition_content"
    t.string   "definition_image"
    t.integer  "subject_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["subject_id"], name: "index_words_on_subject_id"
  end

end
