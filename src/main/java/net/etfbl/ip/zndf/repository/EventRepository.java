/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package net.etfbl.ip.zndf.repository;

import net.etfbl.ip.zndf.domain.Event;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 *
 * @author milan
 */
public interface EventRepository extends JpaRepository<Event, Long> {

}
