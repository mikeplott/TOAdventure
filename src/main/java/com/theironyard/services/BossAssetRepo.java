package com.theironyard.services;

import com.theironyard.entities.BossAsset;
import org.springframework.data.repository.CrudRepository;

/**
 * Created by michaelplott on 11/13/16.
 */
public interface BossAssetRepo extends CrudRepository<BossAsset, Integer> {
}
