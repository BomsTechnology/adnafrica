<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Http\Resources\AnnouncementResource;
use App\Http\Resources\UserResource;
use App\Models\Announcement;
use App\Models\Category;
use App\Models\User;
use Illuminate\Http\Request;

class SearchController extends Controller
{

    public function searching($data)
    {

        $data = json_decode($data);
        $results = [
            "ads" => "",
            "company" => "",
        ];
        // dd($data);
        if ($data->gender == 'all') {
            if ($data->category != 'all') {
                $category = Category::find($data->category);
                if ($category->parent != NULL) {
                    $ads = Announcement::whereCategoryId($data->category)->inRandomOrder()->get();
                    $company = User::where('type', 'professional')->whereCategoryId($data->category)->inRandomOrder()->get();
                    $results["ads"] = AnnouncementResource::collection($ads);
                    $results["company"] = UserResource::collection($company);
                } else {
                    $ads = Announcement::whereIn('category_id', function ($query) use ($data) {
                        $query->select('id')
                            ->from('categories')
                            ->whereParent($data->category);
                    })
                        ->orWhere('category_id', $data->category)
                        ->inRandomOrder()
                        ->get();
                    $company = User::whereIn('category_id', function ($query) use ($data) {
                        $query->select('id')
                            ->from('categories')
                            ->whereParent($data->category);
                    })

                        ->orWhere('category_id', $data->category);
                    $company =  $company->where('type', 'professional')->inRandomOrder()
                        ->get();
                    $results["ads"] = AnnouncementResource::collection($ads);
                    $results["company"] = UserResource::collection($company);
                }
            } else {
                $ads = Announcement::latest()->inRandomOrder()->get();
                $company = User::where('type', 'professional')->inRandomOrder()->get();
                $results["ads"] = AnnouncementResource::collection($ads);
                $results["company"] = UserResource::collection($company);
            }
        } elseif ($data->gender == 'company') {
            if ($data->category != 'all') {
                $category = Category::find($data->category);
                if ($category->parent != NULL) {
                    $company = User::where('type', 'professional')->whereCategoryId($data->category)->inRandomOrder()->get();
                    $results["company"] = UserResource::collection($company);
                } else {
                    $company = User::whereIn('category_id', function ($query) use ($data) {
                        $query->select('id')
                            ->from('categories')
                            ->whereParent($data->category);
                    })
                        ->orWhere('category_id', $data->category);
                    $company =  $company->where('type', 'professional')->inRandomOrder()
                        ->get();
                    $results["company"] = UserResource::collection($company);
                }
            } else {
                $company = User::where('type', 'professional')->inRandomOrder()->get();
                $results["company"] = UserResource::collection($company);
            }
        } else {
            if ($data->category != 'all') {
                $category = Category::find($data->category);
                if ($category->parent != NULL) {
                    $ads = Announcement::whereCategoryId($data->category)->inRandomOrder()->get();
                    $results["ads"] = AnnouncementResource::collection($ads);
                } else {
                    $ads = Announcement::whereIn('category_id', function ($query) use ($data) {
                        $query->select('id')
                            ->from('categories')
                            ->whereParent($data->category);
                    })
                        ->orWhere('category_id', $data->category)
                        ->inRandomOrder()
                        ->get();
                    $results["ads"] = AnnouncementResource::collection($ads);
                }
            } else {
                $ads = Announcement::latest()->inRandomOrder()->get();
                $results["ads"] = AnnouncementResource::collection($ads);
            }
        }
        $response = [
            'status' => true,
            'message' => 'Login successful!',
            'data' => $results
        ];
        return response($response, 201);
    }


    public function saveRecentSearch($userId, $catId)
    {
        $user = User::find($userId);
        $recentSearch = explode(',', $user->recent_search);
        $size = sizeof($recentSearch);
        if ($size <= 1) {
            if ($recentSearch[0] == "" || in_array($catId, $recentSearch)) {
                $recentSearch[0] = $catId;
            } else {
                $recentSearch[0] = "{$recentSearch[0]}";
                $recentSearch[1] = $catId;
            }
        } else if ($size < 5 && !in_array($catId, $recentSearch)) {
            $recentSearch[$size - 1] = "{$recentSearch[$size - 1]}";
            $recentSearch[$size] = $catId;
        } else if ($size <= 5 && in_array($catId, $recentSearch)) {
            $key = array_search($catId, $recentSearch);
            for ($i = $key; $i < $size; $i++) {
                if ($i == $size - 1) {
                    $recentSearch[$i] = $catId;
                } else {
                    $recentSearch[$i] = $recentSearch[$i + 1];
                }
            }
        }
        if ($size == 5 && !in_array($catId, $recentSearch)) {
            for ($i = 0; $i < 5; $i++) {
                if ($i < 4) {
                    $recentSearch[$i] = $recentSearch[$i + 1];
                } else {
                    $recentSearch[$i] = $catId;
                }
            }
        }

        $user->update([
            'recent_search' => implode(",", $recentSearch)
        ]);
        $response = [
            'status' => true,
            'message' => 'Login successful!',
            'data' => [
                'recent_search' => implode(",", $recentSearch)
            ]
        ];
        return response($response, 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }
}
